---
slug: "aws-ec2-intro"
title: "AWS EC2 - Intro"
main_category: DevOps
category: 2. Cloud
status: ✅ Completed
last_edited_time: 2021-09-28
---

### What is EC2

- Elastic Compute Cloud = Infra as a Service

- Consists of

  - EC2: Renting virtual machines

  - EBS:

  - ELB

  - ASG

- Config options

  - OS

  - CPU

  - RAM

  - Storage space

  - Network card

  - Firewall rules

  - Bootstrap script

- EC2 Instance Types

  - naming convention

  - m5.2xlarge -> m: instance class; 5: generation (version); 2xlarge: size within the instance class

  - General Purpose

  - Compute Optimized -> Compute intensive tasks that require high performance processors

  - Memory Optimized -> Fast perf for workloads that process large data sets in memoery

  - Storage Optimized -> Great for storage-intensive tasks that require high sequential read & write access to large data sets on local storage

     <br />

#### Security Groups

- Fundamental of network security in AWS

- Control how traffic is allowed into / out of EC2 instances

- "Firewall" on EC2 instances

- Regulate

  - Access to Ports

  - Authorised IP ranges - IPv4 & IPv6

  - Control of inbound & outbound network

- Good to maintain one separate security group for SSH access

- If application is not accessible (Time Out), then it's a security group issue

- Classic Ports to Know

  - 22 = SSH (Secure Shell) - log into a Linux instance

  - 21 = FTP (File Transfer Protocol) - upload files into a file share

  - 22 = SFTP (Secure File Transfer Protocol) - upload files using SSH

  - 80 = HTTP - access unsecured websites

  - 443 = HTTPS - access secured websites

  - 3389 = RDP (Remote Desktop Protocol) - log into a Windows instance

   <br />

### SSH

- Mac/Linux

  - SSH

- Windows

  - Putty

- All

  - EC2 Instance Connect (web)

What is SSH?

- Allows you to control remote machine using a command line

<br />

How to use?

```javascript
ssh -i EC2Tutorial.pem ec2-user@{PUBLIC_IP_ADDRESS}
```

- Permissions 0644 : required that your private key files are not accessible by others

  - chmod 0400 EC2Tutorial.pem

<br />

### EC2 Instance Types

- On Demand

- Reserved

- Spot Instances

- Dedicated Hosts

- Dedicated Instances

<br />

### Network

- Elastic IPs

  - If fixed public IP for an instance is needed → Elastic IP

  - A public IPv4 IP you own

  - 5 Elastic IPs per account

  - NOT RECOMMENDED: Poor architectural decisions => Instead use random public IP & register DNS name to it or use Load Balancer & don't use public IP

     <br />

### Placement Groups

Cluster

 - Clusters instances into a low-latency group in a single Availability Zone

 - Pros: Great network

 - Cons: If the rack fails, all instances fail at the same time

 - Use case: Big Data job that needs to complete fast; Application that needs extremely low latency & high network throughput

Spread

 - spreads instances across underlying hardware (max 7 instances per group per AZ) - critical applications

 - Pros: 
   - Can span across AZ
   - Reduced risk of simultaneous failure
   - EC2 Instances on different physical hardware

 - Cons: 
   - Limited to 7 instances per AZ per placement group

 - Use case: 
 -  Application that needs to maximize high availability
 -  Critical Applications where each instance must be isolated from failure from each other

Partition

  - spreads instances across many different partitions within AZ. Scales to 100s of EC2 instances per group
  - Pros: 
    - Up to 7 partitions per AZ
    - Can span across multiple AZs in the same region
    - Up to 100s of EC2 instances
    - The instances in a partition do not share racks with the instances in the other partitions
    - A partition failure can affect many EC2 but won't affect other partitions
    - EC2 instances get access to the partition info as metadata

  - Use case: 
    - HDFS
    - HBase
    - Cassandra
    - Kafka

   <br />

#### Elastic Network Interfaces (ENI)

- logical component in a VPC that represents a virtual network card

- Can have following attributes

  - Primary private IPv4, on or more secondary IPv4

  - One Elastic IP (IPv4) per private IPv4

  - One Public IPv4

  - One or more security groups

  - a MAC address

- You can create ENI independently & attach them on the fly on EC2 instances for failover

- Bound to specific AZ

More control over IP

<br />

#### EC2 Hibernate

- Stop: the data on disk (EBS) is kept intact in the next start

- Terminate: any EBS volumes (root) also set-up to be destroyed is lost

- First start: OS boots & EC2 User Data script is run

- Following starts: OS boots

- Then application starts, caches get warmed up & can take time

⇒ Hibernate!

- All in-memory (RAM) state is preserved

- instance boot is much faster (OS not stopped or restarted)

- Under the hood

  - RAM state is written to a file in the root EBS volume (must be encrypted)

- Use cases

  - long-running processing

  - saving the RAM state

  - services that take time to initialize

- <details><summary>(Good to know)</summary>

  - C, M & R instance families

  - Must be less than 150GB RAM size

  - not supported for bare metal instances

  - AMI: Amazon Linux 2, Linux AMI, Ubuntu & Windows

  - RootVolume: must be EBS, encrypted, not instance store & large

  - Available for On-Demand & Reserved instances

  - Max 60 Days

  </details>

<br />

### Advanced

EC2 Nitro

  - Underlying platform for next gen EC2 instances

  - New virtualization technology

  - Better performance

    - Better networking options enhanced networking)

    - Higher speed EBS (64,000 EBS IOPS)

  - Better underlying security

vCPU

  - Multiple threads can run on one CPU (multithreading)

  - Each thread is represented as a vCPU

  - Optimizing CPU options

    - #. of CPU cores: ⬇️ CPU cores → ⬇️ licensing costs (If need high RAM)

    - #. of threads per core: Disable multithreading (If need high Performance Computing workloads)

- Capacity Reservations

  - Ensure you have EC2 Capacity when needed

  - Combine with Reserved Instances & Savings Plans to do cost saving

   <br />
