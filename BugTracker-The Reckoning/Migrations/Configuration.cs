namespace BugTracker_The_Reckoning.Models.Migrations
{
    using BugTracker_The_Reckoning.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "weiserp_bugtracker.Models.ApplicationDbContext";
        }

        protected override void Seed(ApplicationDbContext context)
        {
            var store = new RoleStore<IdentityRole>(context);
            var UserStore = new UserStore<ApplicationUser>(context);
            var manager = new UserManager<ApplicationUser>(UserStore);
            var roleManager = new RoleManager<IdentityRole>(store);

            //setup of Roles and Users for Testing
            if (!context.Roles.Any(r => r.Name == "Administrator"))
            {
                roleManager.Create(new IdentityRole("Administrator"));
            }

            if (!context.Roles.Any(r => r.Name == "Project Manager"))
            {
                roleManager.Create(new IdentityRole("Project Manager"));
            }

            if (!context.Roles.Any(r => r.Name == "Developer"))
            {
                roleManager.Create(new IdentityRole("Developer"));
            }

            if (!context.Roles.Any(r => r.Name == "Submitter"))
            {
                roleManager.Create(new IdentityRole("Submitter"));
            }

            if (!context.Users.Any(u => u.Email == "hughjones@libreworx.com"))
            {
                var user = new ApplicationUser
                {
                    UserName = "hughjones@libreworx.com",
                    Email = "hughjones@libreworx.com",
                    FirstName = "Hugh",
                    LastName = "Jones",
                    DisplayName = "Hugh Jones",
                };

                manager.Create(user, "LearnToCode1");
                manager.AddToRoles(user.Id, new string[] { "Administrator" });
            }
            if (!context.Users.Any(u => u.Email == "projectmanager@google.com"))
            {
                var user = new ApplicationUser
                {
                    UserName = "projectmanager@google.com",
                    Email = "projectmanager@google.com",
                    FirstName = "Projectmanager",
                    LastName = "Jones",
                    DisplayName = "Projectmanager Jones",
                };

                manager.Create(user, "LearnToCode1");
                manager.AddToRoles(user.Id, new string[] { "Project Manager" });
            }
            if (!context.Users.Any(u => u.Email == "developer@google.com"))
            {
                var user = new ApplicationUser
                {
                    UserName = "developer@google.com",
                    Email = "developer@google.com",
                    FirstName = "Developer",
                    LastName = "Jones",
                    DisplayName = "Developer Jones",
                };

                manager.Create(user, "LearnToCode1");
                manager.AddToRoles(user.Id, new string[] { "Developer" });
            }
            if (!context.Users.Any(u => u.Email == "submitter@google.com"))
            {
                var user = new ApplicationUser
                {
                    UserName = "submitter@google.com",
                    Email = "submitter@google.com",
                    FirstName = "Submitter",
                    LastName = "Jones",
                    DisplayName = "Submitter Jones",
                };

                manager.Create(user, "LearnToCode1");
                manager.AddToRoles(user.Id, new string[] { "Submitter" });
            }
            string userId = "";

            if (!context.Users.Any(u => u.Email == "philipkrw@gmail.com"))
            {
                var user = new ApplicationUser
                {
                    UserName = "philipkrw@gmail.com",
                    Email = "philipkrw@gmail.com",
                    FirstName = "Philip",
                    LastName = "Weiser",
                    DisplayName = "Philip Weiser",
                };

                
                manager.Create(user, "LearnToCode1");
                manager.AddToRoles(user.Id, new string[] { "Administrator" });

                userId = user.Id;
            }



            if (context.Projects.Count() == 0)
            {
                var projects = new List<Project>
            {
            new Project { Name = "The Big Lebowski" },
            new Project { Name = "Peterkin" },
            new Project { Name = "Ferris" },
            new Project { Name = "Newman" },
            new Project { Name = "Kramer" }
            };
                projects.ForEach(p => context.Projects.Add(p));
                context.SaveChanges();

                var types = new List<TicketType>
            {
            new TicketType { Name = "Bug" },
            new TicketType { Name = "Featue request" },
            new TicketType { Name = "Improvement" }
            };
                types.ForEach(t => context.TicketTypes.Add(t));
                context.SaveChanges();

                var priorities = new List<TicketPriority>
                {
                    new TicketPriority {Name = "Critical"},
                    new TicketPriority {Name = "Low"}
                };
            priorities.ForEach(s => context.TicketPriorities.Add(s));
            context.SaveChanges();

                var status = new List<TicketStatus>
            {
                new TicketStatus { Name = "Not started" },
                new TicketStatus { Name = "In progess" },
                new TicketStatus { Name = "Completed" }
            };
                status.ForEach(s => context.TicketStatuses.Add(s));
                context.SaveChanges();

                context.SaveChanges();
                var project = projects.Find(p => p.Name == "The Big Lebowski").Id;
                var project2 = projects.Find(p => p.Name == "Peterkin").Id;
                var project3 = projects.Find(p => p.Name == "Ferris").Id;
                var project4 = projects.Find(p => p.Name == "Newman").Id;
                var project5 = projects.Find(p => p.Name == "Kramer").Id;

                var tickets = new List<Ticket>
            {

            new Ticket {
            Title = "Search is broken",
            Description = "The search never returns results",
            Created = System.DateTimeOffset.Now,
            ProjectId = project,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 2,
            OwnerUserId = userId,
            },
            new Ticket {
            Title = "Can't attach a file to a ticket",
            Description = "I get an error undefined everytinme",
            Created = System.DateTimeOffset.Now,
            ProjectId = project2,
            TicketTypeId = 2,
            TicketStatusId = 2,
            TicketPriorityId = 2,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Can't reassign a ticket",
            Description = "The drop down of users doesn't populate",
            Created = System.DateTimeOffset.Now,
            ProjectId = project3,
            TicketTypeId = 3,
            TicketStatusId = 3,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Can't change status of a ticket",
            Description = "Error every time",
            Created = System.DateTimeOffset.Now,
            ProjectId = project4,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Can't create a new project",
            Description = "Validation error",
            Created = System.DateTimeOffset.Now,
            ProjectId = project5,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Can't assign users to a ticket",
            Description = "Drop down list doesn't populate",
            Created = System.DateTimeOffset.Now,
            ProjectId = project5,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Sorting of rows not working",
            Description = "When you click on a row nothing happens",
            Created = System.DateTimeOffset.Now,
            ProjectId = project4,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Create new ticket",
            Description = "Need a textarea for description",
            Created = System.DateTimeOffset.Now,
            ProjectId = project3,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Timestamps are editable",
            Description = "Really? How convenient",
            Created = System.DateTimeOffset.Now,
            ProjectId = project2,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            new Ticket {
            Title = "Save after editing broken",
            Description = "More validation errors",
            Created = System.DateTimeOffset.Now,
            ProjectId = project,
            TicketTypeId = 1,
            TicketStatusId = 1,
            TicketPriorityId = 1,
            OwnerUserId = userId,

            },
            };
                tickets.ForEach(t => t.AssignedUser = context.Users.First(u => u.Id == userId));
                tickets.ForEach(t => context.Tickets.Add(t));
                var notifications = new List<TicketNotification>
                {
                    new TicketNotification{ TicketId = 1, UserId = userId}
                };
                notifications.ForEach(n => context.TicketNotifications.Add(n));
                context.SaveChanges();

                var histories = new List<TicketHistory>{
                    new TicketHistory{TicketId = 1, Property = "Title", OldValue = "Old Title", NewValue = "New Title", Changed = DateTimeOffset.Now, UserId = userId}
                };
                histories.ForEach(h => context.TicketHistories.Add(h));
                var User = context.Users.Single(u => u.Email == "philipkrw@gmail.com");

                User.Projects.Concat(projects);
                //foreach (Project proj in User.Projects)
                //{
                //    proj.Members.Add(User);
                //}
                context.Entry(User).State = EntityState.Modified;
                context.SaveChanges();

                var User2 = context.Users.Single(u => u.Email == "philipkrw@gmail.com").Projects.ToList();
            }
        }
    }
}
