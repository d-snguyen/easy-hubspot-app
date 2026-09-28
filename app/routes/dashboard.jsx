import { Page, BlockStack, Button, Badge } from "@shopify/polaris";
import "./dashboard.css";


export default function Dashboard() {
  const dashboardData = {
    shopifyConnected: true,
    hubspotConnected: false,

    customersSynced: 1250,
    ordersSynced: 3420,
    productsSynced: 580,

    lastSync: "25 Sep 2026 09:15 AM",

    shopifyApiStatus: "Healthy",
    hubspotApiStatus: "Disconnected",
  };

  const formatNumber = (n) => n.toLocaleString();

  const stats = [
    {
      key: "customers",
      value: dashboardData.customersSynced,
      label: "Customers Synced",
    },
    { key: "orders", value: dashboardData.ordersSynced, label: "Orders Synced" },
    {
      key: "products",
      value: dashboardData.productsSynced,
      label: "Products Synced",
    },
  ];

  const healthItems = [
    { name: "Shopify API", status: dashboardData.shopifyApiStatus },
    { name: "HubSpot API", status: dashboardData.hubspotApiStatus },
  ];

  return (
    <Page
      title="HubSpot Integration Dashboard"
      subtitle="Monitor and manage your Shopify to HubSpot integration"
    >
      <div className="dashboard">
        <BlockStack gap="500">
          {/* Connection Status */}
          <div className="dashboard__connections">
            <div className="dashboard__connection dashboard__connection--shopify">
              <div className="dashboard__connection-left">
                <span className="dashboard__connection-icon">S</span>
                <div>
                  <p className="dashboard__connection-name">Shopify Connection</p>
                  <p className="dashboard__connection-hint">Store data source</p>
                </div>
              </div>
              <Badge tone={dashboardData.shopifyConnected ? "success" : "critical"}>
                {dashboardData.shopifyConnected ? "Connected" : "Not Connected"}
              </Badge>
            </div>

            <div className="dashboard__connection dashboard__connection--hubspot">
              <div className="dashboard__connection-left">
                <span className="dashboard__connection-icon">H</span>
                <div>
                  <p className="dashboard__connection-name">HubSpot Connection</p>
                  <p className="dashboard__connection-hint">CRM destination</p>
                </div>
              </div>
              <Badge tone={dashboardData.hubspotConnected ? "success" : "critical"}>
                {dashboardData.hubspotConnected ? "Connected" : "Not Connected"}
              </Badge>
            </div>
          </div>

          {/* Sync Statistics */}
          <section className="dashboard__section">
            <h2 className="dashboard__section-title">Sync Statistics</h2>
            <div className="dashboard__stats">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className={`dashboard__stat dashboard__stat--${stat.key}`}
                >
                  <p className="dashboard__stat-value">{formatNumber(stat.value)}</p>
                  <p className="dashboard__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="dashboard__info-grid">
            {/* Last Sync */}
            <section className="dashboard__section">
              <h2 className="dashboard__section-title">Last Synchronisation</h2>
              <p className="dashboard__last-sync">
                {dashboardData.lastSync}
                <small>local time</small>
              </p>
            </section>

            {/* API Health */}
            <section className="dashboard__section">
              <h2 className="dashboard__section-title">API Health</h2>
              <ul className="dashboard__health-list">
                {healthItems.map((item) => {
                  const healthy = item.status === "Healthy";
                  return (
                    <li key={item.name} className="dashboard__health-item">
                      <span>{item.name}</span>
                      <span className="dashboard__health-status">
                        <span
                          className={`dashboard__health-dot ${
                            healthy
                              ? "dashboard__health-dot--healthy"
                              : "dashboard__health-dot--down"
                          }`}
                        />
                        {item.status}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          {/* Quick Actions */}
          <section className="dashboard__section">
            <h2 className="dashboard__section-title">Quick Actions</h2>
            <div className="dashboard__actions">
              <Button variant="primary" fullWidth>
                Sync Customers
              </Button>
              <Button fullWidth>Sync Orders</Button>
              <Button fullWidth>Sync Products</Button>
            </div>
          </section>
        </BlockStack>
      </div>
    </Page>
  );
}
