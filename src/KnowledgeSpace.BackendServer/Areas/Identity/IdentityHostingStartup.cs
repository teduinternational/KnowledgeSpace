using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(KnowledgeSpace.BackendServer.Areas.Identity.IdentityHostingStartup))]

namespace KnowledgeSpace.BackendServer.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) =>
            {
            });
        }
    }
}