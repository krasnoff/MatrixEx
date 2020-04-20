using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MatrixEx
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false, Inherited = false)]
    public class CheckEmailAttribute : System.ComponentModel.DataAnnotations.ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            var inputValue = value as string;
            
            try
            {
                var addr = new System.Net.Mail.MailAddress(inputValue);
                return addr.Address == inputValue;
            }
            catch
            {
                return false;
            }
        }
    }
}
