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
            var tick = db.Tickets;
            var helper = new UserRolesHelper();
            var UNT = tick.Except(db.Tickets.Where(t => t.AssignedUser.Id == theUser.Id));
            model.UserNotProjects = new MultiSelectList(db.Projects, "Id", "Name");
            model.UserNotTickets = new MultiSelectList(UNT.OrderBy(m=> m.Title), "Id", "Title");
            model.TicketOwner = id;
            model.UserProjects = new MultiSelectList(theUser.Projects, "Id", "Name");
            model.UserTickets = new MultiSelectList(theUser.Tickets, "Id", "Title");
            model.UserRoles = new MultiSelectList(helper.ListUserRoles(theUser.Id));
            var roles = new List<IdentityRole>();
            foreach (var rol in db.Roles)
            {
                if (!theUser.Roles.Any(r => r.RoleId == rol.Id))
                {
                    roles.Add(rol);
                }
            }
            model.UserNotRoles = new MultiSelectList(roles, "Id", "Name");
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
                var user = db.Users.Find(model.TicketOwner);
                if (model.newTickets != null)
                {
                    foreach (var newTicket in model.newTickets)
                    {
                        if (newTicket != "" && newTicket != null)
                        {
                            int tickId = Convert.ToInt32(newTicket);
                            var tick = db.Tickets.Find(tickId);
                            user.Tickets.Add(tick);
                            if (!user.Projects.Contains(tick.Project))
                            {
                                user.Projects.Add(tick.Project);
                            }
                            tick.AssignedUser = user;
                            tick.AssignedUserId = model.TicketOwner;
                            var tn = new TicketNotification()
                            {
                                TicketId = tick.Id,
                                UserId = user.Id,
                            };
                            Notify(tn, "Add");
                            db.Entry(tick).State = EntityState.Modified;
                        }
                    }
                }
                if (model.newProjects != null)
                {
                    foreach (var newProject in model.newProjects)
                    {
                        if (newProject != "" && newProject != null)
                        {
                            int projId = Convert.ToInt32(newProject);
                            var proj = db.Projects.Find(projId);
                            user.Projects.Add(proj);
                            proj.Members.Add(user);
                            db.Entry(proj).State = EntityState.Modified;
                        }
                    }
                }
                if (model.newRoles != null)
                {
                    foreach (var newRole in model.newRoles)
                    {
                        if (newRole != "" && newRole != null)
                        {
                            string roleId = newRole;
                            var role = db.Roles.Find(roleId);
                            var helper = new UserRolesHelper();
                            helper.AddUserToRole(user.Id, db.Roles.Find(roleId).Name);
                        }
                    }
                }
                if (model.remTickets != null)
                {
                    foreach (var remTicket in model.remTickets)
                    {
                        if (remTicket != "" && remTicket != null)
                        {
                            int tickId = Convert.ToInt32(remTicket);
                            var tick = db.Tickets.Find(tickId);
                            user.Tickets.Remove(tick);
                            tick.AssignedUser = null;
                            tick.AssignedUserId = null;
                            db.Entry(tick).State = EntityState.Modified;
                            var tn = new TicketNotification()
                            {
                                TicketId = tick.Id,
                                UserId = user.Id,
                            };
                            Notify(tn, "Remove");
                        }
                    }
                }
                if (model.remProjects != null)
                {
                    foreach (var remProject in model.remProjects)
                    {
                        if (remProject != "" && remProject != null)
                        {
                            int projId = Convert.ToInt32(remProject);
                            var proj = db.Projects.Find(projId);
                            var theTicketsToRemove = new List<Ticket>();
                            foreach (var tick in user.Tickets)
                                if (tick.ProjectId == projId)
                                    theTicketsToRemove.Add(tick);
                            user.Tickets = user.Tickets.Except(theTicketsToRemove).ToList();
                            user.Projects.Remove(proj);
                            proj.Members.Remove(user);
                            db.Entry(proj).State = EntityState.Modified;
                        }
                    }
                }
                if (model.remRoles != null)
                {
                    foreach (var remRole in model.remRoles)
                    {
                        if (remRole != "" && remRole != null)
                        {
                            string roleName = remRole;
                            var helper = new UserRolesHelper();
                            helper.RemoveUserFromRole(user.Id, roleName);
                        }
                    }
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

        private void Notify(TicketNotification tn, string action)
        {
            ///// INSERT SENDGRID FOR NOTIFICATIONS
            if (action.Equals("Remove"))
            {
                /// removed from ticket
            }
            else 
            {
                /// added to ticket
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
