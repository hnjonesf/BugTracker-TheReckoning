using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PagedList.Mvc;
using PagedList;
using BugTracker_The_Reckoning.Models;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class TicketStatusController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TicketStatus
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Index(string sortOrder, int? page)
        {
            ViewBag.NameSortParm = sortOrder == "Name_D" ? "Name" : "Name_D";

            var ticketstatuses = db.TicketStatuses.ToList();

            switch (sortOrder)
            {
                case ("Name"):
                    ticketstatuses = ticketstatuses.OrderBy(t => t.Name).ToList();
                    break;
                case ("Name_D"):
                    ticketstatuses = ticketstatuses.OrderByDescending(t => t.Name).ToList();
                    break;
                default:
                    ticketstatuses = ticketstatuses.OrderBy(t => t.Name).ToList();
                    break;
            }

            ViewBag.sortOrder = sortOrder;
            var pageList = ticketstatuses.ToList();
            var pageNumber = page ?? 1;
            return View(pageList.ToPagedList(pageNumber, 5));
        }

        // GET: TicketStatus/Details/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketStatus ticketStatus = db.TicketStatuses.Find(id);
            if (ticketStatus == null)
            {
                return HttpNotFound();
            }
            return View(ticketStatus);
        }

        // GET: TicketStatus/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create()
        {
            return View();
        }

        // POST: TicketStatus/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] TicketStatus ticketStatus)
        {
            if (ModelState.IsValid)
            {
                db.TicketStatuses.Add(ticketStatus);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ticketStatus);
        }

        // GET: TicketStatus/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketStatus ticketStatus = db.TicketStatuses.Find(id);
            if (ticketStatus == null)
            {
                return HttpNotFound();
            }
            return View(ticketStatus);
        }

        // POST: TicketStatus/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] TicketStatus ticketStatus)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ticketStatus).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ticketStatus);
        }

        // GET: TicketStatus/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketStatus ticketStatus = db.TicketStatuses.Find(id);
            if (ticketStatus == null)
            {
                return HttpNotFound();
            }
            return View(ticketStatus);
        }

        // POST: TicketStatus/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TicketStatus ticketStatus = db.TicketStatuses.Find(id);
            db.TicketStatuses.Remove(ticketStatus);
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
