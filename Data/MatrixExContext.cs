using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MatrixEx;

namespace MatrixEx.Data
{
    public class MatrixExContext : DbContext
    {
        public MatrixExContext (DbContextOptions<MatrixExContext> options)
            : base(options)
        {
        }

        public DbSet<MatrixEx.Users> Users { get; set; }
        public DbSet<MatrixEx.Data.Categories> Categories { get; set; }
    }
}
