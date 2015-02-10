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
using Microsoft.AspNet.Identity.EntityFramework;

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
            var model = new AssignPageModel();
            var theUser = db.Users.Find(id);
            // send a select list of projects the user is NOT on
            // send a select list of tickets the user is NOT on
            // send a select list of roles the user is NOT on

            // send a list of projects, tickets, roles the user is on
            //var UNT = db.Tickets.Where(t => t.AssignedUsers.Any(u=> u.Id != theUser.Id) == true);
            var tick = db.Tickets;
            var UNT = tick.Except(db.Tickets.Where(t => t.AssignedUser.Id == theUser.Id));
            //ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name");
            model.UserNotProjects = new SelectList(db.Projects.Where(p => p.Members.Any(m => m.Id != theUser.Id)) , "Id", "Name");
            model.UserNotTickets = new SelectList(UNT, "Id", "Title");
            var roles = new List<IdentityRole>();
            foreach (var rol in db.Roles)
            {
                if (!theUser.Roles.Any(r => r.RoleId == rol.Id))
                {
                    roles.Add(rol);
                }
            }
            model.UserNotRoles = new SelectList(roles, "Id", "Name");
            model.Id = theUser.Id;
            model.UserName = theUser.UserName;
            if (model == null)
            {
                return HttpNotFound();
            }

            return View(model);
        }

        // POST: Users/Manage
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult Manage(AssignPageModel model)
        {
            if (ModelState.IsValid)
            {
                var user = db.Users.Find(model.Id);
                if (model.newProject.First() != null)
                {
                    user.Projects.Add(model.newProject as Project);
                }
                if (model.newTicket.First() != null)
                {
                    user.Tickets.Add(model.newTicket as Ticket);
                    var tick = db.Tickets.Find(model.newTicket as Ticket);
                    tick.AssignedUser = user;
                    tick.AssignedUserId = model.Id;
                    db.Entry(tick).State = EntityState.Modified;
                }
                if (model.newRole.First() != null)
                {
                    var helper = new UserRolesHelper();
                    helper.AddUserToRole(user.Id, (model.newRole as IdentityRole).Name);
                }
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View(model);
            }
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
