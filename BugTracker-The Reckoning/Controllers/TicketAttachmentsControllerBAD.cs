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
using Microsoft.AspNet.Identity;
using BugTracker_The_Reckoning.Models;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class TicketAttachmentsControllerBAD : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TicketAttachments
        public ActionResult Index(string sortOrder, int? page)
        {

            ViewBag.TicketIdParm = sortOrder == "TicketId" ? "TicketId_D" : "TicketId";
            ViewBag.FilePathParm = sortOrder == "FilePath" ? "FilePath_D" : "FilePath";
            ViewBag.DescriptionParm = sortOrder == "Description" ? "Description_D" : "Description";
            ViewBag.CreatedParm = sortOrder == "Created" ? "Created_D" : "Created";
            ViewBag.UserIdParm = sortOrder == "UserId" ? "UserId_D" : "UserId";
            ViewBag.FileURLParm = sortOrder == "FileURL" ? "FileURL_D" : "FileURL";

            var ticketattachments = db.TicketAttachments.Include(t => t.Id).Include(t => t.FilePath)
                .Include(t => t.Description).Include(t => t.Created).Include(t => t.UserId).Include(t => t.FileUrl);

            switch (sortOrder)
            {
                case ("TicketId"):
                    ticketattachments = ticketattachments.OrderBy(t => t.TicketId);
                    break;
                case ("TicketId_D"):
                    ticketattachments = ticketattachments.OrderByDescending(t => t.TicketId);
                    break;
                case ("FilePath"):
                    ticketattachments = ticketattachments.OrderBy(t => t.FilePath);
                    break;
                case ("FilePath_D"):
                    ticketattachments = ticketattachments.OrderByDescending(t => t.FilePath);
                    break;
                case ("Priority"):
                    ticketattachments = ticketattachments.OrderBy(t => t.Description);
                    break;
                case ("Priority_D"):
                    ticketattachments = ticketattachments.OrderByDescending(t => t.Description);
                    break;
                case ("Created"):
                    ticketattachments = ticketattachments.OrderBy(t => t.Created);
                    break;
                case ("Created_D"):
                    ticketattachments = ticketattachments.OrderByDescending(t => t.Created);
                    break;
                case ("UserId"):
                    ticketattachments = ticketattachments.OrderBy(t => t.UserId);
                    break;
                case ("UserId_D"):
                    ticketattachments = ticketattachments.OrderByDescending(t => t.UserId);
                    break;
                case ("FileUrl"):
                    ticketattachments = ticketattachments.OrderBy(t => t.FileUrl);
                    break;
                case ("FileUrl_D"):
                    ticketattachments = ticketattachments.OrderByDescending(t => t.FileUrl);
                    break;
                default:
                    ticketattachments = ticketattachments.OrderBy(t => t.TicketId);
                    break;
            }

            ViewBag.sortOrder = sortOrder;
            var pageList = ticketattachments;
            var pageNumber = page ?? 1;
            return View(pageList.ToPagedList(pageNumber, 5));

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
        public ActionResult Create(int ticketParentId)
        {
            var ta = new TicketAttachment();
            var t = db.Tickets.Find(ticketParentId);
            //ta.Ticket = t;
            ta.TicketId = t.Id;
            return View(ta);
        }

        // POST: TicketAttachments/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create(TicketAttachment ticketAttachment)
        {
            if (ModelState.IsValid)
            {
                ticketAttachment.Created = DateTimeOffset.Now;
                ticketAttachment.UserId = User.Identity.GetUserId();
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
