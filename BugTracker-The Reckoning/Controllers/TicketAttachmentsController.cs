using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BugTracker_The_Reckoning.Models;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class TicketAttachmentsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TicketAttachments
        public ActionResult Index()
        {
            return View(db.TicketAttachments.ToList());
        }

        // GET: TicketAttachments/Details/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketAttachment ticketAttachment = db.TicketAttachments.Find(id);
            if (ticketAttachment == null)
            {
                return HttpNotFound();
            }
            return View(ticketAttachment);
        }

        // GET: TicketAttachments/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create()
        {
            return View();
        }

        // POST: TicketAttachments/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create([Bind(Include = "Id,TicketId,UserId,FilePath,Description,Created,FileUrl")] TicketAttachment ticketAttachment)
        {
            if (ModelState.IsValid)
            {
                db.TicketAttachments.Add(ticketAttachment);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ticketAttachment);
        }

        // GET: TicketAttachments/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketAttachment ticketAttachment = db.TicketAttachments.Find(id);
            if (ticketAttachment == null)
            {
                return HttpNotFound();
            }
            return View(ticketAttachment);
        }

        // POST: TicketAttachments/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator, Project Manager, Developer")]
        public ActionResult Edit([Bind(Include = "Id,TicketId,UserId,FilePath,Description,Created,FileUrl")] TicketAttachment ticketAttachment)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ticketAttachment).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ticketAttachment);
        }

        // GET: TicketAttachments/Delete/5
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketAttachment ticketAttachment = db.TicketAttachments.Find(id);
            if (ticketAttachment == null)
            {
                return HttpNotFound();
            }
            return View(ticketAttachment);
        }

        // POST: TicketAttachments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator, Project Manager")]
        public ActionResult DeleteConfirmed(int id)
        {
            TicketAttachment ticketAttachment = db.TicketAttachments.Find(id);
            db.TicketAttachments.Remove(ticketAttachment);
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
