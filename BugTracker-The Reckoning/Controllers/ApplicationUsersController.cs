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

            ViewBag.NameSortParm = sortOrder == "FirstName" ? "FirstName_D" : "FirstName";
            ViewBag.LastNameSortParm = sortOrder == "LastName" ? "LastName_D" : "LastName";
            ViewBag.EmailSortParm = sortOrder == "Email" ? "Email_D" : "Email";
            ViewBag.PhoneSortParm = sortOrder == "Phone" ? "Phone_D" : "Phone";
            
            var usersList = db.Users.ToList();
            switch (sortOrder)
            {
                case ("FirstName"):
                    usersList = usersList.OrderBy(u => u.FirstName).ToList();
                    ViewBag.sortparam = "FirstName";
                    break;

                case ("FirstName_D"):
                    usersList = usersList.OrderByDescending(u => u.FirstName).ToList();
                    ViewBag.sortparam = "FirstName_D";
                    break;

                case ("LastName"):
                    usersList = usersList.OrderBy(u => u.LastName).ToList();
                    ViewBag.sortparam = "LastName";
                    break;

                case ("LastName_D"):
                    usersList = usersList.OrderByDescending(u => u.LastName).ToList();
                    ViewBag.sortparam = "LastName_D";
                    break;

                case ("Email"):
                    usersList = usersList.OrderBy(u => u.Email).ToList();
                    ViewBag.sortparam = "Email";
                    break;

                case ("Email_D"):
                    usersList = usersList.OrderByDescending(u => u.Email).ToList();
                    ViewBag.sortparam = "Email_D";
                    break;

                case ("Phone"):
                    usersList = usersList.OrderBy(u => u.PhoneNumber).ToList();
                    ViewBag.sortparam = "PhoneNumber";
                    break;

                case ("Phone_D"):
                    usersList = usersList.OrderByDescending(u => u.PhoneNumber).ToList();
                    ViewBag.sortparam = "PhoneNumber_D";
                    break;

                default:
                    usersList = usersList.OrderBy(u => u.FirstName).ToList();
                    ViewBag.sortparam = "FirstName";
                    break;
            }
            var pageNumber = page ?? 1;
            ViewBag.pageNumber = pageNumber;
            var onePageOfUsers = usersList.ToPagedList(pageNumber, 2);
            return View(onePageOfUsers);
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

        // GET: Users/Create
        [Authorize(Roles = "Administrator")]
        public ActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator")]
        public ActionResult Create([Bind(Include = "FirstName,LastName,DisplayName,Email,EmailConfirmed,PhoneNumber,PhoneNumberConfirmed,UserName")] ApplicationUser applicationUser)
        {
            if (ModelState.IsValid)
            {
                applicationUser.DisplayName = applicationUser.FirstName + " " + applicationUser.LastName;
                db.Users.Add(applicationUser);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(applicationUser);
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
