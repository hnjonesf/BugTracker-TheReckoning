using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BugTracker_The_Reckoning.Models;
using Microsoft.AspNet.Identity;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class TicketsController : Controller
    {

        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Tickets
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Index(string sortOrder)
        {
            ViewBag.NameSortParm = sortOrder == "FirstName" ? "FirstName_D" : "FirstName";
            ViewBag.ProjectNameParm = sortOrder == "ProjectName" ? "ProjectName_D" : "ProjectName";
            ViewBag.TicketPriorityNameParm = sortOrder == "TicketPriorityName" ? "TicketPriorityName_D" : "TicketPriorityName";
            ViewBag.TicketStatusesNameParm = sortOrder == "TicketStatusesName" ? "TicketStatusesName_D" : "TicketStatusesName";
            ViewBag.TicketTypesNameParm = sortOrder == "TicketTypesName" ? "TicketTypesName_D" : "TicketTypesName";
            ViewBag.TitleParm = sortOrder == "Title" ? "Title_D" : "Title";
            ViewBag.DescriptionParm = sortOrder == "Description" ? "Description_D" : "Description";
            ViewBag.CreatedParm = sortOrder == "Created" ? "Created_D" : "Created";
            ViewBag.UpdatedParm = sortOrder == "Updated" ? "Updated_D" : "Updated";

            var tickets = db.Tickets.Include(t => t.OwnerUser).Include(t => t.Project).Include(t => t.TicketPriority).Include(t => t.TicketStatuses).Include(t => t.TicketTypes);
            switch(sortOrder){
                case ("FirstName"):
                    tickets = tickets.OrderBy(t=>t.OwnerUser.FirstName);
                    break;

                case ("FirstName_D"):
                    tickets = tickets.OrderByDescending(t=>t.OwnerUser.FirstName);
                    break;

                case ("ProjectName"):
                    tickets = tickets.OrderBy(t=>t.Project.Name);
                    break;

                case ("ProjectName_D"):
                tickets = tickets.OrderByDescending(t=>t.Project.Name);
                    break;
                case ("TicketPriorityName"):
                    tickets = tickets.OrderBy(t=>t.TicketPriority.Name);
                    break;

                case ("TicketPriorityName_D"):
                    tickets = tickets.OrderByDescending(t=>t.TicketPriority.Name);
                    break;

                case ("TicketStatusesName"):
                    tickets = tickets.OrderBy(t=>t.TicketStatuses.Name);
                    break;

                case ("TicketStatusesName_D"):
                tickets = tickets.OrderByDescending(t=>t.TicketStatuses.Name);
                    break;
                case ("TicketTypesName"):
                    tickets = tickets.OrderBy(t=>t.TicketTypes.Name);
                    break;

                case ("TicketTypesName_D"):
                    tickets = tickets.OrderByDescending(t=>t.TicketTypes.Name);
                    break;

                case ("Title"):
                    tickets = tickets.OrderBy(t=>t.Title);
                    break;

                case ("Title_D"):
                tickets = tickets.OrderByDescending(t=>t.Title);
                    break;
                case ("Description"):
                    tickets = tickets.OrderBy(t=>t.Description);
                    break;

                case ("Description_D"):
                    tickets = tickets.OrderByDescending(t=>t.Description);
                    break;

                case ("Created"):
                    tickets = tickets.OrderBy(t=>t.Created);
                    break;

                case ("Created_D"):
                tickets = tickets.OrderByDescending(t=>t.Created);
                    break;
                case ("Updated"):
                    tickets = tickets.OrderBy(t=>t.Updated);
                    break;

                case ("Updated_D"):
                    tickets = tickets.OrderByDescending(t=>t.Updated);
                    break;

                default:
                    tickets = tickets.OrderByDescending(t=>t.Created);
                    break;
            }
            return View(tickets.ToList());
        }

        // GET: Tickets/Details/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Ticket ticket = db.Tickets.Find(id);
            if (ticket == null)
            {
                return HttpNotFound();
            }
            return View(ticket);
        }

        // GET: Tickets/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create()
        {
            ViewBag.OwnerUserId = new SelectList(db.Users, "Id", "FirstName");
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "Name");
            ViewBag.TicketPriorityId = new SelectList(db.TicketPriorities, "Id", "Name");
            ViewBag.TicketStatusId = new SelectList(db.TicketStatuses, "Id", "Name");
            ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name");
            return View();
        }

        // POST: Tickets/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Title,Description,ProjectId,TicketPriorityId,TicketTypeId")] Ticket ticket)
        {
            if (ModelState.IsValid)
            {
                ticket.Created = DateTimeOffset.Now;
                ticket.OwnerUserId = User.Identity.GetUserId();
                ticket.TicketStatusId = db.TicketStatuses.First(t => t.Name == "Not Started").Id;
                db.Tickets.Add(ticket);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.OwnerUserId = new SelectList(db.Users, "Id", "FirstName", ticket.OwnerUserId);
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "Name", ticket.ProjectId);
            ViewBag.TicketPriorityId = new SelectList(db.TicketPriorities, "Id", "Name", ticket.TicketPriorityId);
            ViewBag.TicketStatusId = new SelectList(db.TicketStatuses, "Id", "Name", ticket.TicketStatusId);
            ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name", ticket.TicketTypeId);
            return View(ticket);
        }

        // GET: Tickets/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Ticket ticket = db.Tickets.Find(id);
            if (ticket == null)
            {
                return HttpNotFound();
            }
            ViewBag.OwnerUserId = new SelectList(db.Users, "Id", "FirstName", ticket.OwnerUserId);
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "Name", ticket.ProjectId);
            ViewBag.TicketPriorityId = new SelectList(db.TicketPriorities, "Id", "Name", ticket.TicketPriorityId);
            ViewBag.TicketStatusId = new SelectList(db.TicketStatuses, "Id", "Name", ticket.TicketStatusId);
            ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name", ticket.TicketTypeId);
            return View(ticket);
        }

        // POST: Tickets/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Title,Description,ProjectId,OwnerUserId,TicketPriorityId,TicketStatusId,TicketTypeId")] Ticket ticket)
        {
            if (ModelState.IsValid)
            {
                ticket.Updated = DateTimeOffset.Now;
                db.Entry(ticket).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.OwnerUserId = new SelectList(db.Users, "Id", "FirstName", ticket.OwnerUserId);
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "Name", ticket.ProjectId);
            ViewBag.TicketPriorityId = new SelectList(db.TicketPriorities, "Id", "Name", ticket.TicketPriorityId);
            ViewBag.TicketStatusId = new SelectList(db.TicketStatuses, "Id", "Name", ticket.TicketStatusId);
            ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name", ticket.TicketTypeId);
            return View(ticket);
        }

        // GET: Tickets/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Ticket ticket = db.Tickets.Find(id);
            if (ticket == null)
            {
                return HttpNotFound();
            }
            return View(ticket);
        }

        // POST: Tickets/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Ticket ticket = db.Tickets.Find(id);
            db.Tickets.Remove(ticket);
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
