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
using Microsoft.AspNet.Identity;
using System.Reflection;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;
using System.Collections.ObjectModel;

namespace BugTracker_The_Reckoning.Controllers
{
    [Authorize]
    public class TicketsController : Controller
    {

        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Tickets
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        public ActionResult Index(string sortOrder, int? page, string searchStr,
            bool? titleSearch, bool? nameSearch, bool? emailSearch,
            bool? projectSearch, bool? attachmentsSearch, bool? prioritySearch,
            bool? statusSearch, bool? typeSearch, bool? assignSearch,
            FilterModel filter)
        {
            if (titleSearch == null) { titleSearch = true; }
            if (nameSearch == null) { nameSearch = true; }
            if (emailSearch == null) { emailSearch = true; }
            if (projectSearch == null) { projectSearch = true; }
            if (attachmentsSearch == null) { attachmentsSearch = true; }
            if (prioritySearch == null) { prioritySearch = true; }
            if (statusSearch == null) { statusSearch = true; }
            if (typeSearch == null) { typeSearch = true; }
            if (assignSearch == null) { assignSearch = true; }
            //Sort orders
            ViewBag.NameSortParm = sortOrder == "FirstName" ? "FirstName_D" : "FirstName";
            ViewBag.ProjectNameParm = sortOrder == "ProjectName" ? "ProjectName_D" : "ProjectName";
            ViewBag.TicketPriorityNameParm = sortOrder == "TicketPriorityName" ? "TicketPriorityName_D" : "TicketPriorityName";
            ViewBag.TicketStatusesNameParm = sortOrder == "TicketStatusesName" ? "TicketStatusesName_D" : "TicketStatusesName";
            ViewBag.TicketTypesNameParm = sortOrder == "TicketTypesName" ? "TicketTypesName_D" : "TicketTypesName";
            ViewBag.TitleParm = sortOrder == "Title" ? "Title_D" : "Title";
            ViewBag.DescriptionParm = sortOrder == "Description" ? "Description_D" : "Description";
            ViewBag.CreatedParm = sortOrder == "Created" ? "Created_D" : "Created";
            ViewBag.UpdatedParm = sortOrder == "Updated" ? "Updated_D" : "Updated";
            ViewBag.AssignedParm = sortOrder == "Assigned" ? "Assigned_D" : "Assigned";
            
            //if user posted a search
            if (ViewBag.searchStr != null && ViewBag.searchStr != "")
            {
                searchStr = ViewBag.searchStr;
            }
            ViewBag.titleSearch = titleSearch;
            ViewBag.nameSearch = nameSearch;
            ViewBag.emailSearch = emailSearch;
            ViewBag.projectSearch = projectSearch;
            ViewBag.attachmentsSearch = attachmentsSearch;
            ViewBag.prioritySearch = prioritySearch;
            ViewBag.statusSearch = statusSearch;
            ViewBag.typeSearch = typeSearch;
            ViewBag.assignSearch = assignSearch;

            var tickets = new List<Ticket>();
            // if searchStr isn't null/empty
            if (searchStr != "" && searchStr != null)
            {
                // find tickets searchable by logged in user
                var ticketsAvailable = FilterByRole();

                tickets.AddRange(ticketsAvailable.Where(t => t.Description.Contains(searchStr)));

                if (titleSearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.Title.Contains(searchStr)));
                if (nameSearch == true)
                {
                    tickets.Union(ticketsAvailable.Where(t => t.OwnerUser.FirstName.Contains(searchStr)));
                    tickets.Union(ticketsAvailable.Where(t => t.OwnerUser.LastName.Contains(searchStr)));
                }
                if (emailSearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.OwnerUser.Email.Contains(searchStr)));
                if (projectSearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.Project.Name.Contains(searchStr)));
                if (attachmentsSearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.TicketAttachments.Any(ta => ta.Description.Contains(searchStr))));
                if (prioritySearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.TicketPriority.Name.Contains(searchStr)));
                if (statusSearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.TicketStatuses.Name.Contains(searchStr)));
                if (typeSearch == true)
                    tickets.Union(ticketsAvailable.Where(t => t.TicketTypes.Name.Contains(searchStr)));
                if (assignSearch == true)
                {
                    try
                    {
                        tickets.Union(ticketsAvailable.Where(t => t.AssignedUser.DisplayName.Contains(searchStr)));
                    }
                    catch { }
                    try
                    {
                        tickets.Union(ticketsAvailable.Where(t => t.AssignedUser.FirstName.Contains(searchStr)));
                    }
                    catch { }
                    try
                    {
                        tickets.Union(ticketsAvailable.Where(t => t.AssignedUser.LastName.Contains(searchStr)));
                    }
                    catch { }
                    try
                    {
                        tickets.Union(ticketsAvailable.Where(t => t.AssignedUser.UserName.Contains(searchStr)));
                    }
                    catch { }

                }
                ViewBag.searchStr = searchStr;
            }
            else
            {
                tickets.AddRange(FilterByRole().ToList());
            }

            // figure out how to sort view model before sending
            switch (sortOrder)
            {
                case ("FirstName"):
                    tickets = tickets.OrderBy(t => t.OwnerUser.FirstName).ToList();
                    break;
                case ("FirstName_D"):
                    tickets = tickets.OrderByDescending(t => t.OwnerUser.FirstName).ToList();
                    break;
                case ("ProjectName"):
                    tickets = tickets.OrderBy(t => t.Project.Name).ToList();
                    break;
                case ("ProjectName_D"):
                    tickets = tickets.OrderByDescending(t => t.Project.Name).ToList();
                    break;
                case ("TicketPriorityName"):
                    tickets = tickets.OrderBy(t => t.TicketPriority.Name).ToList();
                    break;
                case ("TicketPriorityName_D"):
                    tickets = tickets.OrderByDescending(t => t.TicketPriority.Name).ToList();
                    break;
                case ("TicketStatusesName"):
                    tickets = tickets.OrderBy(t => t.TicketStatuses.Name).ToList();
                    break;
                case ("TicketStatusesName_D"):
                    tickets = tickets.OrderByDescending(t => t.TicketStatuses.Name).ToList();
                    break;
                case ("TicketTypesName"):
                    tickets = tickets.OrderBy(t => t.TicketTypes.Name).ToList();
                    break;
                case ("TicketTypesName_D"):
                    tickets = tickets.OrderByDescending(t => t.TicketTypes.Name).ToList();
                    break;
                case ("Title"):
                    tickets = tickets.OrderBy(t => t.Title).ToList();
                    break;
                case ("Title_D"):
                    tickets = tickets.OrderByDescending(t => t.Title).ToList();
                    break;
                case ("Description"):
                    tickets = tickets.OrderBy(t => t.Description).ToList();
                    break;
                case ("Description_D"):
                    tickets = tickets.OrderByDescending(t => t.Description).ToList();
                    break;
                case ("Created"):
                    tickets = tickets.OrderBy(t => t.Created).ToList();
                    break;
                case ("Created_D"):
                    tickets = tickets.OrderByDescending(t => t.Created).ToList();
                    break;
                case ("Updated"):
                    tickets = tickets.OrderBy(t => t.Updated).ToList();
                    break;
                case ("Updated_D"):
                    tickets = tickets.OrderByDescending(t => t.Updated).ToList();
                    break;
                case ("Assigned"):
                    tickets = tickets.OrderBy(t => t.AssignedUser.DisplayName).ToList();
                    break;
                case ("Assigned_D"):
                    tickets = tickets.OrderByDescending(t => t.AssignedUser.DisplayName).ToList();
                    break;
                default:
                    tickets = tickets.OrderByDescending(t => t.Created).ToList();
                    break;
            }

            if (filter.assignedList == null || filter.assignedList.Count() == 0)
            {
                var filterModel = new FilterModel();
                var filterList1 = new List<string>();
                var filterList2 = new List<string>();
                var filterList3 = new List<string>();
                var filterList4 = new List<string>();
                var filterList5 = new List<string>();
                var filterList6 = new List<string>();

                foreach (var tick in tickets)
                {
                    if (!filterList1.Contains(tick.TicketTypes.Name))
                    {
                        filterList1.Add(tick.TicketTypes.Name);
                    }
                    if (!filterList2.Contains(tick.TicketStatuses.Name))
                    {
                        filterList2.Add(tick.TicketStatuses.Name);
                    }
                    if (!filterList3.Contains(tick.TicketPriority.Name))
                    {
                        filterList3.Add(tick.TicketPriority.Name);
                    }
                    if (!filterList4.Contains(tick.Project.Name))
                    {
                        filterList4.Add(tick.Project.Name);
                    }
                    if (!filterList5.Contains(tick.OwnerUser.DisplayName))
                    {
                        filterList5.Add(tick.OwnerUser.DisplayName);
                    }
                    if (!filterList6.Contains(tick.AssignedUser.DisplayName))
                    {
                        filterList6.Add(tick.AssignedUser.DisplayName);
                    }
                }
                filterModel.typeList = new MultiSelectList(filterList1);
                filterModel.statusList = new MultiSelectList(filterList2);
                filterModel.priorityList = new MultiSelectList(filterList3);
                filterModel.projList = new MultiSelectList(filterList4);
                filterModel.ownerList = new MultiSelectList(filterList5);
                filterModel.assignedList = new MultiSelectList(filterList6);

                ViewBag.filterModel = filterModel;
            }
            else
            {
                ViewBag.filterModel = filter;
                //remove elements from tickets that are filtered out

            }

            ViewBag.sortOrder = sortOrder;
            var pagedList = tickets.ToList();
            var pageNumber2 = page ?? 1;
            return View(pagedList.ToPagedList(pageNumber2, 10));
        }

        // POST: Tickets/Filter
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Filter([Bind(Include = "typeList,statusList,priorityList,projList,ownerList,assignedList")] FilterModel filter)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction(,"Index", filter);
            }
            else
            {
                return View(filter);
            }
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
            if (db.Projects.Count() != 0)
            {
                var helper = new UserRolesHelper();
                ViewBag.OwnerUserId = new SelectList(db.Users, "Id", "FirstName");
                ViewBag.ProjectId = new SelectList(db.Projects, "Id", "Name");
                ViewBag.TicketPriorityId = new SelectList(db.TicketPriorities, "Id", "Name");
                ViewBag.TicketStatusId = new SelectList(db.TicketStatuses, "Id", "Name");
                ViewBag.TicketTypeId = new SelectList(db.TicketTypes, "Id", "Name");
                return View();
            }
            else
            {
                return RedirectToAction("Create", "Projects");
            }
            
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

                var theProject = db.Projects.Find(ticket.ProjectId);
                ticket.Project = theProject;
                ticket.AssignedUser = theProject.Manager;
                ticket.AssignedUserId = theProject.ManagerId;

                var usr = db.Users.Find(ticket.Project.ManagerId);
                usr.Tickets.Add(ticket);
                db.Tickets.Add(ticket);
                var tn = new TicketNotification()
                {
                    Ticket = ticket,
                    TicketId = ticket.Id,
                    User = ticket.Project.Manager,
                    UserId = ticket.Project.ManagerId
                };
                var helper = new UserRolesHelper();
                helper.Notify(tn, "Manage Ticket");
                db.Entry(usr).State = EntityState.Modified;
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
        private void updateHistory(string property, Ticket old, Ticket current, string oldProp, string newProp)
        {
            db.TicketHistories.Add(new TicketHistory()
            {
                TicketId = current.Id,
                UserId = User.Identity.GetUserId(),
                Property = property,
                OldValue = oldProp,
                NewValue = newProp,
                Changed = current.Updated,
            });
            db.SaveChanges();
        }
        public void CheckChanged(object first, object second)
        {
            Type firstType = first.GetType();
            foreach (PropertyInfo propertyInfo in firstType.GetProperties())
            {
                if (propertyInfo.CanRead)
                {
                    object firstValue = propertyInfo.GetValue(first, null);
                    object secondValue = propertyInfo.GetValue(second, null);
                    if (firstValue != null || secondValue != null)
                    {
                        if (firstValue == null || secondValue == null || !firstValue.Equals(secondValue))
                        {
                            string firstV = null;
                            string secondV = null;

                            if (firstValue == null)
                                firstV = null;
                            else
                                firstV = firstValue.ToString();

                            if (secondValue == null)
                                secondV = null;
                            else
                                secondV = secondValue.ToString();
                            if (firstV == null || secondV == null || !firstV.Equals(secondV))
                            {
                                if (propertyInfo.Name != "TicketHistories" && propertyInfo.Name != "Updated" && propertyInfo.Name != "Created")
                                {
                                    updateHistory(propertyInfo.Name,
                                        first as Ticket,
                                        second as Ticket,
                                        firstV,
                                        secondV
                                        );
                                }
                            }
                        }
                    }
                }
            }
        }
        // POST: Tickets/Edit/5
        [Authorize(Roles = "Administrator, Project Manager, Developer, Submitter")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Title,Created,Description,ProjectId,OwnerUserId,TicketPriorityId,TicketStatusId,TicketTypeId")] Ticket ticket)
        {
            if (ModelState.IsValid)
            {
                ticket.Updated = DateTimeOffset.Now;

                //Make new TicketHistory
                //get a non-proxy oldTicket
                var dbNoTrack = new ApplicationDbContext();
                ((IObjectContextAdapter)dbNoTrack).ObjectContext.ContextOptions.ProxyCreationEnabled = false;
                var oldTicket = dbNoTrack.Tickets.Find(ticket.Id);
                //Check and record changes
                CheckChanged(oldTicket, ticket);
                // get rid of non-proxy old ticket
                dbNoTrack.Dispose();

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
        [Authorize(Roles = "Administrator")]
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
        [Authorize(Roles = "Administrator")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Ticket ticket = db.Tickets.Find(id);
            db.Tickets.Remove(ticket);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        private IList<Ticket> FilterByRole()
        {
            var tickets = new List<BugTracker_The_Reckoning.Models.Ticket>();
            if (User.IsInRole("Administrator") || User.IsInRole("Project Manager"))
            {
                tickets.AddRange(db.Tickets.ToList());
            }
            else if (User.IsInRole("Developer"))
            {
                tickets.AddRange(db.Users.Find(User.Identity.GetUserId()).Tickets.ToList());
            }
            else if (User.IsInRole("Submitter"))
            {
                var userId = User.Identity.GetUserId();
                tickets.AddRange(db.Tickets.Where(t => t.OwnerUserId == userId).ToList());
            }
            return tickets;
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
