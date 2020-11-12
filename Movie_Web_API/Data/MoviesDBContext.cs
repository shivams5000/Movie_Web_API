using Microsoft.EntityFrameworkCore;
using Movie_Web_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movie_Web_API.Data
{
    public class MoviesDBContext : DbContext
    {
        public MoviesDBContext(DbContextOptions<MoviesDBContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }
    }
}