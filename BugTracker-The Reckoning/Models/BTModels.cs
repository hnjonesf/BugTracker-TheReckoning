using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using PagedList; 

namespace BugTracker_The_Reckoning.Models
{
    public class BTModels
    {
    }
    public class TicketAttachment 
    {
        public int Id { get; set; }
        public int TicketId { get; set; }
        public string UserId { get; set; }
        [Display(Name = "File Path")]
        public string FilePath { get; set; }
        [Display(Name = "Description")]
        public string Description { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTimeOffset Created { get; set; }
        [Display(Name = "File Url")]
        public string FileUrl { get; set; }
        public virtual Ticket Ticket { get; set; }
        public virtual ApplicationUser Owner { get; set; }
    }
    public class TicketComment 
    {
        public int Id { get; set; }
        public int TicketId { get; set; }
        public string UserId { get; set; }
        [Display(Name = "Comment")]
        public string Comment { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTimeOffset Created { get; set; }
        public virtual Ticket Ticket { get; set; }
        public virtual ApplicationUser Creator { get; set; }
    }
    public class TicketHistory 
    {

        public int Id { get; set; }
        public int TicketId { get; set; }
        public virtual Ticket Ticket { get; set; }
        public string UserId { get; set; }
        public string Property { get; set; }
        [Display(Name = "Old Value")]
        public string OldValue { get; set; }
        [Display(Name = "New Value")]
        public string NewValue { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:mm/dd/yyyy}")]
        public Nullable<DateTimeOffset> Changed { get; set; }
    }
    public class TicketNotification 
    {
        public int Id { get; set; }
        public int TicketId { get; set; }
        public string UserId { get; set; }
        public virtual Ticket Ticket { get; set; }      
        public virtual ApplicationUser User { get; set; }
    }
    public class Ticket 
    {
        //Columns
        public int Id { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Title cannot be longer than 50 characters.")]
        public string Title { get; set; }
        public string Description { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTimeOffset Created { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public Nullable<DateTimeOffset> Updated { get; set; }

        //Foreign keys
        public int ProjectId { get; set; }
        public string OwnerUserId { get; set; }
        public string AssignedUserId { get; set; }
        public int? TicketPriorityId { get; set; }
        public int TicketStatusId { get; set; }
        public int TicketTypeId { get; set; }

        //Constructor
        public Ticket()
        {
            this.TicketAttachments = new HashSet<TicketAttachment>();
            this.TicketComments = new HashSet<TicketComment>();
            this.TicketHistories = new HashSet<TicketHistory>();
            this.TicketNotifications = new HashSet<TicketNotification>();
        }

        //Navigation properties
        public virtual Project Project { get; set; }
        public virtual ApplicationUser OwnerUser { get; set; }
        public virtual ApplicationUser AssignedUser { get; set; }
        public virtual TicketPriority TicketPriority { get; set; }
        public virtual TicketStatus TicketStatuses { get; set; }
        public virtual TicketType TicketTypes { get; set; }

        public virtual ICollection<TicketAttachment> TicketAttachments { get; set; }
        public virtual ICollection<TicketComment> TicketComments { get; set; }
        public virtual ICollection<TicketHistory> TicketHistories { get; set; }
        public virtual ICollection<TicketNotification> TicketNotifications { get; set; }

    }
    public class TicketStatus 
    {

        public int Id { get; set; }
        public TicketStatus()
        {
            this.Tickets = new HashSet<Ticket>();
        }
        public virtual ICollection<Ticket> Tickets { get; set; }

        public string Name { get; set; }
    }
    public class TicketPriority 
    {

        public int Id { get; set; }
        public TicketPriority(){
            this.Tickets = new HashSet<Ticket>();
        }
        public virtual ICollection<Ticket> Tickets { get; set; }
        public string Name { get; set; }
    }
    public class TicketType 
    {

        public int Id{ get; set; }
        public TicketType()
        {
            this.Tickets = new HashSet<Ticket>();
        }
        public virtual ICollection<Ticket> Tickets { get; set; }
        public string Name { get; set; }
    }
    public class Project 
    {
        public int Id { get; set; }
        [StringLength(50, ErrorMessage = "First name cannot be longer than 50 characters.")]
        public string Name { get; set; }
        public string ManagerId { get; set; }
        public Project()
        {
            this.Tickets = new HashSet<Ticket>();
            this.Members = new HashSet<ApplicationUser>();
        }

        public virtual ApplicationUser Manager { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
        public virtual ICollection<ApplicationUser> Members { get; set; }
    }
}