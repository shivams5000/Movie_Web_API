using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Movie_Web_API.Models
{
    /// <summary>
    /// This class is for Movie Model
    /// </summary>
    public class Movie
    {
        // Primary Key of Movie
        [Key]
        public int MovieID { get; set; }

        // Movie Title or Movie Name
        [Required]
        [StringLength(200)]
        public string MovieName { get; set; }

        // Represent Movie Story Summary
        [Required]
        [StringLength(1000)]
        public string  Summary { get; set; }

        // User Rating
        [Required]
        public int Rating { get; set; }

        // Director's Name who Direct the Movie
        [Required]
        [StringLength(200)]
        public string Director { get; set; }
    }
}
