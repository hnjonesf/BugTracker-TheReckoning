using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BugTracker_The_Reckoning.Models;
using PagedList.Mvc;
using PagedList;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class TicketPrioritiesController : Controller
    {
        
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TicketPriorities
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Index(string sortOrder, int? page)
        {
            ViewBag.NameSortParm = sortOrder == "Priority_D" ? "Priority" : "Priority_D";
            var priorities = db.TicketPriorities.ToList();
            switch (sortOrder)
            {
                case ("Priority"):
                    priorities = priorities.OrderBy(t => t.Name).ToList();
                    break;
                case ("Priority_D"):
                    priorities = priorities.OrderByDescending(t => t.Name).ToList();
                    break;
                default:
                    priorities = priorities.OrderBy(t => t.Name).ToList();
                    break;
            }

            ViewBag.sortOrder = sortOrder;
            var pageList = priorities.ToList();
            var pageNumber = page ?? 1;
            return View(pageList.ToPagedList(pageNumber, 5));
        }

        // GET: TicketPriorities/Details/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketPriority ticketPriority = db.TicketPriorities.Find(id);
            if (ticketPriority == null)
            {
                return HttpNotFound();
            }
            return View(ticketPriority);
        }

        // GET: TicketPriorities/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create()
        {
            return View();
        }

        // POST: TicketPriorities/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] TicketPriority ticketPriority)
        {
            if (ModelState.IsValid)
            {
                db.TicketPriorities.Add(ticketPriority);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ticketPriority);
        }

        // GET: TicketPriorities/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketPriority ticketPriority = db.TicketPriorities.Find(id);
            if (ticketPriority == null)
            {
                return HttpNotFound();
            }
            return View(ticketPriority);
        }

        // POST: TicketPriorities/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] TicketPriority ticketPriority)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ticketPriority).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ticketPriority);
        }

        // GET: TicketPriorities/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketPriority ticketPriority = db.TicketPriorities.Find(id);
            if (ticketPriority == null)
            {
                return HttpNotFound();
            }
            return View(ticketPriority);
        }

        // POST: TicketPriorities/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TicketPriority ticketPriority = db.TicketPriorities.Find(id);
            db.TicketPriorities.Remove(ticketPriority);
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
