# 1. Preparation:
## Download and Install WinSCP:
Download WinSCP from the official website and install it on your local machine.
 
## Obtain EC2 Instance Details:
  - Log in to your AWS console and navigate to the EC2 dashboard.
  - Select your EC2 instance and note the following details:
    - Public DNS: The hostname to connect to.
    - Username: Typically "ec2-user" for Amazon Linux instances. 
    - Private Key: Download the .pem file containing your private key for authentication.

# 2. Configure WinSCP Session:
   - Open WinSCP: Launch WinSCP. 
   - Create a New Session: Click "New Site" or "New Session" to open the configuration window. 
   - Enter Connection Details:
     - File Protocol: Select "SFTP". 
     - Host Name: Paste the Public DNS of your EC2 instance. 
     - Port Number: Usually "22" 
     - User Name: Enter "ec2-user"
   - Authentication:
     - Password (if using): If your instance is configured with a password, enter it here. 
     - Private Key (recommended):
       - Click "Advanced". 
       - Browse to your downloaded .pem private key file. 
       - Select the appropriate key format (usually "PPK").

# 3. Connect to EC2 Instance:
   Click "Login": Once the connection details are entered, click "Login" to establish a connection to your EC2 instance.

# 4. Transfer Files:
   Build The code for production, using command:
   ```bash
   ng build
   ```
 
  ## Navigate to Deployment Directory:
  **/var/www**\
  In the right pane (remote directory), browse to the appropriate directory on your EC2 instance where you want to deploy your code.
 
  ## Upload Files:
  - From the left pane (local directory), select the files or folders you want to upload. 
  - Drag and drop the files into the remote directory on the right, or use the upload option in the context menu.
    - Build Code Path:
    - **soa-vsft/dist/soa-projects/browser**

  ## Assets
  - Copy content from **/home/ak2003/soa-vsft/public/assets/images** folder
  - Paste into **/var/www/assets/images** folder
 
     
