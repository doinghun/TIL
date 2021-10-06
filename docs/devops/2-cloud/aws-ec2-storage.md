---
slug: "aws-ec2-storage"
title: "AWS EC2 - Storage"
main_category: DevOps
category: 2. Cloud
status: ✅ Completed
last_edited_time: 2021-10-05
---

### EBS

What is it?

- Analogy: Think of them as "network USB stick"

- Elastic Block Store (EBS) Volume is a network drive you can attach to your instance while they run

- Network Drive (Not a physical drive) → Can be detached & moved to other EC2

Purpose

- Allows your instances to persist data, even after termination

Features

- Can only be mounted to one instance at a time (at CCP level)

- Bound to a specific AZ, but can be moved around

- Delete on Termination attribute

  - By default, root EBS deleted & other attached EBS not deleted to preserve root volume when instance is terminated.

<br />

#### EBS Snapshots

What is it?

- Backup of your EBS volume at a point in time

Features

- Can copy snapshots across AZ or Region

- Recommended to detach volume to do snapshot (Optional)

<br />

### AMI (Amazon Machine Image)

What is AMI?

- Customization of an EC2 instance

Features

- Built for a specific region & can be copied across regions

- Types

  - Public AMI (from AWS)

  - Own AMI

  - AWS Marketplace AMI

<br />

### EC2 Instance Store

- If you need a high-performance hardware disk

- Better I/O performance

- Ephemeral store - Lose storage if stopped

- Good for buffer/cache/scratch data/ temp content

- Risk of data loss if hardware fails

- Need for Backups & Replication

<br />

#### EBS Volume Types

Properties to consider

- Size

- Throughput

- IOPS (Input / Output Ops per sec)

- Only gp2/gp3 and io1/ioc2 can be used as boot volumes

Types

- General Purpose SSD

  - eg. gp2 / gp3 (SSD)

  - General purpose SSD volume that balances price & performance for a wide variety of workloads

  - Cost effective storage, low-latency

- Provisioned IOPS SSD

  - eg. io1 / io2 (SSD)

  - Highest-performance SSD volume for mission-critical low-latency or high-throughput workloads

  - Critical business applications with sustained IOPS performance OR applications that need more than 16,000 OIPS

  - Great for DB workloads (sensitive to storage perf & consistency)

  - support EBS Multi-attach

- Hard Disk Drives (HDD)

  - Cannot be a boot volume

  - st1 (HDD): Low cost HDD volume designed for frequently accessed, throughput-intensive workloads

  - sc1 (HDD): Lowest cost HDD volume designed for less frequently accessed workloads

#### EBS Multi-Attach - io1/io2 family

Attach the same EBS volume to multiple EC2 instances in the same AZ

Each instance has full read & write permissions to the volume

Use case:

- Achieve higher application availability in clustered Linux applications

- Applications must manage concurrent write operations

Must use a file system that's cluster aware (not XFS, EX4, etc...)

#### EBS Encryption

Encrypted EBS volume comes with

- Encrypted data at rest inside the volume

- All the data in flight moving between the instance & volume is encrypted

- All snapshots are encrypted

- All volumes created from the snapshot encrypted

Encryption & Decryption are handled transparently

Encryption ahs a minimal impact on latency

EBS Encryption leverages keys from KMS (AES-256)

Copying an unencrypted snapshot allows encryption

Snapshots of encrypted volumes are encrypted

### EFS (Elastic File System)

#### EBS vs EFS

**EBS**

- Can be attached to only 1 instance at a time (Using EBS Multi-Attach, you can attach the same EBS volume to multiple EC2 instances in the same AZ)

- are locked at the AZ level

- g2p: IO increases if the disk size increases

- io 1: can increase IO independently

To migrate an EBS volume across AZ

- Take a snapshot

- Restore the snapshot to another AZ

- EBS backups use IO and you shouldn't run them while your application is handling a lot of traffic

Root EBS volumes of instances get terminated by default if the EC2 instance gets terminated

<br />

**EFS**

- Mounting 100s of instances across AZ

- EFS share website files (WordPress)

- Only for Linux Instances

- EFS has a higher price point than EBS

- Can leverage EFS-IA for cost savings

<br />
