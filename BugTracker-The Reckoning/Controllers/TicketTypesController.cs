﻿using System;
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
    public class TicketTypesController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TicketTypes
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Index()
        {
            return View(db.TicketTypes.ToList());
        }

        // GET: TicketTypes/Details/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketType ticketType = db.TicketTypes.Find(id);
            if (ticketType == null)
            {
                return HttpNotFound();
            }
            return View(ticketType);
        }

        // GET: TicketTypes/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Create()
        {
            return View();
        }

        // POST: TicketTypes/Create
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] TicketType ticketType)
        {
            if (ModelState.IsValid)
            {
                db.TicketTypes.Add(ticketType);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ticketType);
        }

        // GET: TicketTypes/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketType ticketType = db.TicketTypes.Find(id);
            if (ticketType == null)
            {
                return HttpNotFound();
            }
            return View(ticketType);
        }

        // POST: TicketTypes/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] TicketType ticketType)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ticketType).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ticketType);
        }

        // GET: TicketTypes/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TicketType ticketType = db.TicketTypes.Find(id);
            if (ticketType == null)
            {
                return HttpNotFound();
            }
            return View(ticketType);
        }

        // POST: TicketTypes/Delete/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TicketType ticketType = db.TicketTypes.Find(id);
            db.TicketTypes.Remove(ticketType);
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
