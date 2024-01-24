using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.IO;
using System.Threading.Tasks;

namespace profilesJson
{
    internal class Program
    {
        public static async Task Main()
        {

            string filePath = "students.json";

            string jsonContent = File.ReadAllText(filePath);

            List<Profile> profiles = JsonSerializer.Deserialize<List<Profile>>(jsonContent);

            foreach (var profile in profiles)
            {
                Console.WriteLine($"First Name: {profile.FirstName}");
                Console.WriteLine($"Last Name: {profile.LastName}");
                Console.WriteLine($"Contact: {profile.Contact}");
                Console.WriteLine($"Address: {profile.Address}");
                Console.WriteLine($"Department:{profile.Department}");
                Console.WriteLine();
            }

            Console.ReadLine();
        }
    }

    public class Profile
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
    }
}
