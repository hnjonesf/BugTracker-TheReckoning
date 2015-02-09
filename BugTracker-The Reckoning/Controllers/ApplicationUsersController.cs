using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PagedList;
using PagedList.Mvc;
using BugTracker_The_Reckoning.Models;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class ApplicationUsersController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Users via PagedList
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult Index(int? page, string sortOrder)
        {
            ViewBag.NameSortParm = sortOrder == "FirstName_D" ? "FirstName" : "FirstName_D";
            ViewBag.LastNameSortParm = sortOrder == "LastName" ? "LastName_D" : "LastName";
            ViewBag.EmailSortParm = sortOrder == "Email" ? "Email_D" : "Email";
            ViewBag.PhoneSortParm = sortOrder == "Phone" ? "Phone_D" : "Phone";

            var usersList = db.Users.ToList();
            ViewBag.sortparam = sortOrder;
            switch (sortOrder)
            {
                case ("FirstName"):
                    usersList = usersList.OrderBy(u => u.FirstName).ToList();
                    break;
                case ("FirstName_D"):
                    usersList = usersList.OrderByDescending(u => u.FirstName).ToList();
                    break;
                case ("LastName"):
                    usersList = usersList.OrderBy(u => u.LastName).ToList();
                    break;
                case ("LastName_D"):
                    usersList = usersList.OrderByDescending(u => u.LastName).ToList();
                    break;
                case ("Email"):
                    usersList = usersList.OrderBy(u => u.Email).ToList();
                    break;
                case ("Email_D"):
                    usersList = usersList.OrderByDescending(u => u.Email).ToList();
                    break;
                case ("Phone"):
                    usersList = usersList.OrderBy(u => u.PhoneNumber).ToList();
                    break;
                case ("Phone_D"):
                    usersList = usersList.OrderByDescending(u => u.PhoneNumber).ToList();
                    break;
                default:
                    usersList = usersList.OrderBy(u => u.FirstName).ToList();
                    break;
            }
            var pageNumber = page ?? 1;
            ViewBag.pageNumber = pageNumber;
            return View(usersList.ToPagedList(pageNumber, 10));
        }

        // GET: Users/Details/5
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApplicationUser applicationUser = db.Users.Find(id);
            if (applicationUser == null)
            {
                return HttpNotFound();
            }
            return View(applicationUser);
        }

        // GET: Users/Manage
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult Manage(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var theUser = db.Users.Find(id);
            // send a select list of projects the user is NOT on
            // send a select list of tickets the user is NOT on
            // send a select list of roles the user is NOT on

            // send a list of projects, tickets, roles the user is on
            //var UNT = db.Tickets.Where(t => t.AssignedUsers.Any(u=> u.Id != theUser.Id) == true);
            var tick = db.Tickets;
            var UNT = tick.Except(db.Tickets.Where(t => t.AssignedUsers.Any(an => an.Id == theUser.Id)));
            ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name");
            ViewBag.UserNotProjects = new SelectList(db.Projects.Where(p => p.Members.Any(m => m.Id != theUser.Id)) , "Id", "Name");
            ViewBag.UserNotTickets = new SelectList(UNT, "Id", "Title");
            var roles = new List<string>();
            foreach (var rol in db.Roles)
            {
                if (!theUser.Roles.Any(r => r.RoleId == rol.Id))
                {
                    roles.Add(rol.Name);
                }
            }
            ViewBag.UserNotRoles = new SelectList(roles);

            if (theUser == null)
            {
                return HttpNotFound();
            }
            return View(theUser);
        }

        // POST: Users/Manage
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult Manage(ApplicationUser applicationUser)
        {
            db.Entry(applicationUser).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        // GET: Users/Edit/5
        [Authorize(Roles = "Administrator")]
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApplicationUser applicationUser = db.Users.Find(id);
            if (applicationUser == null)
            {
                return HttpNotFound();
            }
            return View(applicationUser);
        }

        // POST: Users/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator")]
        public ActionResult Edit([Bind(Include = "Id,FirstName,LastName,DisplayName,Email,EmailConfirmed,PasswordHash,SecurityStamp,PhoneNumber,PhoneNumberConfirmed,TwoFactorEnabled,LockoutEndDateUtc,LockoutEnabled,AccessFailedCount,UserName")] ApplicationUser applicationUser)
        {
            if (ModelState.IsValid)
            {
                db.Entry(applicationUser).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(applicationUser);
        }

        // GET: Users/Delete/5
        [Authorize(Roles = "Administrator")]
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApplicationUser applicationUser = db.Users.Find(id);
            if (applicationUser == null)
            {
                return HttpNotFound();
            }
            return View(applicationUser);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator")]
        public ActionResult DeleteConfirmed(string id)
        {
            ApplicationUser applicationUser = db.Users.Find(id);
            db.Users.Remove(applicationUser);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
