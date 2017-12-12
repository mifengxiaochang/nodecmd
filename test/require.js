 "use strict";
 const fs=require("fs");
 const ModuleType = {
   
    Administrator: {
        Name: 'Administrator', Value: 2
    },
    AdministratorPolicyEnforcer: {
        Name: 'Administrator Policy Enforcer', Value: 91
    },
    AnalyzeSQLServerData: {
        Name: 'Analyze SQL Server Data', Value: 81
    },
    Archiver: {
        Name: 'Archiver', Value: 16
    },
    ArchiverFullTextIndex: {
        Name: 'Archiver Full Text Index', Value: 44
    },
    ArchiverPreScanRetention: {
        Name: 'Archiver Pre-Scan Retention', Value: 41
    },
    ArchiverRestore: {
        Name: 'Archiver Restore', Value: 20
    },
    ArchiverRetention: {
        Name: 'Archiver Retention', Value: 22
    },
    CleanUpOrphanBLOBs: {
        Name: 'Clean Up Orphan BLOBs', Value: 11
    },
    Connector: {
        Name: 'Connector', Value: 19
    },
    ContentManager: {
        Name: 'Content Manager', Value: 3
    },
    ConvertStubsToContent: {
        Name: 'Convert Stubs To Content', Value: 8
    },
    DataManager: {
        Name: 'Data Manager', Value: 39
    },
    DataSynchronization: {
        Name: 'Data Synchronization', Value: 90
    },
    DeploymentManager: {
        Name: 'Deployment Manager', Value: 14
    },
    EDiscovery: {
        Name: 'eDiscovery', Value: 70
    },
    EMCDocumentumHighSpeedMigration: {
        Name: 'EMC Documentum High Speed Migration', Value: 77
    },
    EMCDocumentumMigration: {
        Name: 'EMC Documentum Migration', Value: 73
    },
    EndUserArchiveRestore: {
        Name: 'End-User Archive Restore', Value: 45
    },
    EndUserArchiver: {
        Name: 'End-User Archiver', Value: 34
    },
    EndUserGranularRestore: {
        Name: 'End-User Granular Restore', Value: 85
    },
    //ERoomHighSpeedMigration: 'eRoom High Speed Migration',
    ERoomMigration: {
        Name: 'eRoom Migration', Value: 31
    },
    ExchangePublicFolderMigration: {
        Name: 'Exchange Public Folder Migration', Value: 43
    },
    FarmClone: {
        Name: 'Farm Clone', Value: 93
    },
    FarmCloneForNetAppSystems: {
        Name: 'Farm Clone For Net App Systems', Value: 122
    },
    FarmRebuildRepair: {
        Name: 'Farm Rebuild & Repair', Value: 53
    },
    FarmRebuildRepairForNetAppSystems: {
        Name: 'Farm Rebuild & Repair For NetApp Systems', Value: 121
    },
    //FileSystemArchiver: 'File System Archiver',
    FileSystemHighSpeedMigration: {
        Name: 'File System High Speed Migration', Value: 74
    },
    FileSystemMigration: {
        Name: 'File System Migration', Value: 29
    },
    GranularBackup: {
        Name: 'Granular Backup', Value: 18
    },
    GranularRestore: {
        Name: 'Granular Restore', Value: 4
    },
    HealthAnalyzer: {
        Name: 'Health Analyzer', Value: 92
    },
    HighAvailabilityFailover: {
        Name: 'High Availability Failover', Value: 84
    },
    HighAvailabilityFallback: {
        Name: 'High Availability Fallback', Value: 87
    },
    HighAvailabilityPreScan: {
        Name: 'High Availability Pre-Scan', Value: 88
    },
    HighAvailabilitySynchronization: {
        Name: 'High Availability Synchronization', Value: 83
    },
    JobPruning: {
        Name: 'Job Pruning', Value: 23
    },
    LicenseManager: {
        Name: 'License Manager', Value: 25
    },
    LivelinkHighSpeedMigration: {
        Name: 'Livelink High Speed Migration', Value: 75
    },
    LivelinkMigration: {
        Name: 'Livelink Migration', Value: 32
    },
    LogManager: {
        Name: 'Log Manager', Value: 21
    },
    LotusNotesMigration: {
        Name: 'Lotus Notes Migration', Value: 33
    },
    Office365AutoScan: {
        Name: 'Office 365 Auto Scan', Value: 124
    },
    PlatformBackup: {
        Name: 'Platform Backup', Value: 6
    },
    PlatformBackupForNetAppSystems: {
        Name: 'Platform Backup For NetApp Systems', Value: 116
    },
    PlatformDatabaseMigration: {
        Name: 'Platform Database Migration', Value: 54
    },
    PlatformDatabaseMigrationForNetAppSystems: {
        Name: 'Platform Database Migration For NetApp Systems', Value: 119
    },
    PlatformIndexMigration: {
        Name: 'Platform Index Migration', Value: 55
    },
    PlatformIndexMigrationForNetAppSystems: {
        Name: 'Platform Index Migration For NetApp Systems', Value: 120
    },
    PlatformMaintenanceManager: {
        Name: 'Platform Maintenance Manager', Value: 24
    },
    PlatformMaintenanceManagerForNetAppSystems: {
        Name: 'Platform Maintenance Manager For NetApp Systems', Value: 118
    },
    PlatformRestore: {
        Name: 'Platform Restore', Value: 7
    },
    PlatformRestoreForNetAppSystems: {
        Name: 'Platform Restore For NetApp Systems', Value: 117
    },
    QuickrMigration: {
        Name: 'Quickr Migration', Value: 72
    },
    Replicator: {
        Name: 'Replicator', Value: 5
    },
    ReportCenterActivityHistoryPruning: {
        Name: 'Report Center Activity History Pruning', Value: 101
    },
    ReportCenterAdministrationReports: {
        Name: 'Report Center Administration Reports', Value: 98
    },
    ReportCenterAuditController: {
        Name: 'Report Center Audit Controller', Value: 102
    },
    ReportCenterAuditPruning: {
        Name: 'Report Center Audit Pruning', Value: 103
    },
    ReportCenterCommonCollector: {
        Name: 'Report Center Common Collector', Value: 109
    },
    ReportCenterComplianceReports: {
        Name: 'Report Center Compliance Reports', Value: 99
    },
    ReportCenterDocAveReport: {
        Name: 'Report Center DocAve Report', Value: 100
    },
    ReportCenterForOffice365ActivityReports: {
        Name: 'Report Center For Office 365 Activity Reports', Value: 123
    },
    ReportCenterInfrastructureReports: {
        Name: 'Report Center Infrastructure Reports', Value: 97
    },
    ReportCenterUsageActivityWebParts: {
        Name: 'Report Center Usage Activity Web Parts', Value: 104
    },
    ReportCenterUsagePatternAlerting: {
        Name: 'Report Center Usage Pattern Alerting', Value: 105
    },
    ReportCenterUsageReports: {
        Name: 'Report Center Usage Reports', Value: 96
    },
    ReportCollector: {
        Name: 'Report Collector', Value: 89
    },
    RestoreSQLServerData: {
        Name: 'Restore SQL Server Data', Value: 82
    },
    Retention: {
        Name: 'Retention', Value: 35
    },
    ScheduledStorageManager: {
        Name: 'Scheduled Storage Manager', Value: 9
    },
    SharePointHighSpeedMigration: {
        Name: 'SharePoint High Speed Migration', Value: 110
    },
    SharePointMigration: {
        Name: 'SharePoint Migration', Value: 30
    },
    StorageReport: {
        Name: 'Storage Report', Value: 86
    },
    Vault: {
        Name: 'Vault', Value: 37
    },
    VMBackup: {
        Name: 'VM Backup', Value: 94
    },
    VMRestore: {
        Name: 'VM Restore', Value: 95
    }
};

var str="";
for(var key in ModuleType){
    str=str+`require('./Modules/${key}');`+'\n';
}
fs.writeFile('./index.jsx',str,function(){
console.log('succeed!');
});