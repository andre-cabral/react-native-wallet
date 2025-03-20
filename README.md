#### Environment to install


# -- Node and nvm installation
- Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
- in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
- Download and install Node.js:
nvm install 22
- Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".
- Verify npm version:
npm -v # Should print "10.9.2".


# -- Openjdk version 17 installation
- download version 17 GA (build 17+35) from https://jdk.java.net/archive/

- after that, copy the file from your Downloads folder to the java folder:
- (If you don't have a java folder, just create it before the copy)
cd ~/Downloads
sudo cp -r openjdk-17_linux-x64_bin.tar.gz /usr/local/java

- then, open the java folder and extract the file:
cd usr/local/java
sudo tar xvzf openjdk-17_linux-x64_bin.tar.gz

- now, configure your java_home on path:
sudo nano ~/.bashrc

- put the following lines on the end of the file:
export JAVA_HOME=/usr/local/java/jdk-17
export PATH=$PATH:/home/andre/bin:$JAVA_HOME/bin

- finally, execute the following commands to finalize the configuration of java 17:
sudo update-alternatives --install "/usr/bin/java" "java" "/usr/local/java/jdk17/bin/java" 1
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/local/java/jdk17/bin/javac" 1
sudo update-alternatives --set java /usr/local/java/jdk17/bin/java
sudo update-alternatives --set javac /usr/local/java/jdk17/bin/javac
source /etc/profile 
source ~/.bashrc


# -- Android Studio and Android SDK
- Download Android Studio from https://developer.android.com/studio

- extract and copy the files to ~/android-studio :
cd ~/Downloads
sudo tar xvzf android-studio-2024.3.1.13-linux.tar.gz
sudo cp -r android-studio ~/

- open the android studio folder and run the program:
cd ~/android-studio/bin
./studio

- inside the android studio, when selecting what to install, you will need to make sure the following are selected:
Android SDK
Android SDK Platform
Android Virtual Device

- after the starting configuration, open Android Studio, and go to "Configure" then "SDK Manager".

- Go to the "SDK Platforms" tab, then check "Show Package Details" in the bottom right corner. 
- Expand the Android 15 (VanillaIceCream), then check the following:
Android SDK Platform 35
Intel x86 Atom_64 System Image [OR] Google APIs Intel x86 Atom System Image

- Go to the "SDK Tools" tab and check "Show Package Details". 
- Expand the "Android SDK Build-Tools", then make sure 35.0.0 is selected.

- Finally, click "Apply" to download and install everything selected.


# -- Android PATH
- first open the path file:
sudo nano ~/.bashrc

- put the following on the end of the file:
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

- then refresh the path:
source ~/.bashrc


- install brew and watchman with these commands:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew install watchman

- At last, follow the steps on this link to run on a physical device:
https://reactnative.dev/docs/running-on-device

- its important to note that you'll need to open two consoles to run the app:
-- the first console will start the metro
npm start
-- the second will be the one who runs the app on the device
npm run android


#### Troubleshooting

# -- Error running the app
- one solution with errors on app was to open the project on Android Studio and waiting for it to solve some errors.

- another solution was to refresh the gradle with
npx react-native start --reset-cache

- the following commands also solved some problems:
cd .\android\ 
./gradlew clean

# -- Starting a new react native app
- this step IS NOT NECESSARY to run this app, but will show how this project was started for documenting reasons. The command used was:
npx @react-native-community/cli@latest init wallet