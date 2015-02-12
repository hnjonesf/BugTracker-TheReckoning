using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using SendGrid;
using System.Configuration;
using System.Net.Mail;
using System.Net;

namespace BugTracker_The_Reckoning.Models
{

    // SendGrid 

    public class EmailService : IIdentityMessageService
    {
        public Task SendAsync(IdentityMessage message)
        {
            var MyAddress = ConfigurationManager.AppSettings["ContactEmail"];
            var MyUserName = ConfigurationManager.AppSettings["UserName"];
            var MyPassword = ConfigurationManager.AppSettings["Password"];

            SendGridMessage mail = new SendGridMessage();
            mail.From = new MailAddress("noreply");
            mail.AddTo(message.Destination);
            mail.Subject = message.Subject;
            mail.Text = message.Body;

            var credentials = new NetworkCredential(MyUserName, MyPassword);
            var transportWeb = new Web(credentials);
            transportWeb.Deliver(mail);

            return Task.FromResult(0);
        }

    }
   

    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.

    public class ApplicationUser : IdentityUser
    {
        public virtual ICollection<Ticket> Tickets { get; set; }
        public virtual ICollection<Project> Projects { get; set; }

        [Display(Name ="First Name")]
        [StringLength(50, ErrorMessage = "First Name cannot be longer than 30 characters.")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        [StringLength(50, ErrorMessage = "Last Name cannot be longer than 30 characters.")]
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public ApplicationUser()
        {
            this.Tickets = new HashSet<Ticket>();
            this.Projects = new HashSet<Project>();
        }
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("weiserp-bugtracker-db", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<TicketAttachment> TicketAttachments { get; set; }
        public virtual DbSet<TicketHistory> TicketHistories { get; set; }
        public virtual DbSet<TicketNotification> TicketNotifications { get; set; }
        public virtual DbSet<TicketPriority> TicketPriorities { get; set; }
        public virtual DbSet<Ticket> Tickets { get; set; }
        public virtual DbSet<TicketComment> TicketComments { get; set; }
        public virtual DbSet<TicketStatus> TicketStatuses { get; set; }
        public virtual DbSet<TicketType> TicketTypes { get; set; }

    }
}