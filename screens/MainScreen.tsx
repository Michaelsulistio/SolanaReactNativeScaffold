import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, Divider, Portal, Text, TextInput, useTheme} from 'react-native-paper';

import AccountInfo from '../components/AccountInfo';
import ConnectWalletButton from '../components/ConnectButton';
import useAuthorization from '../utils/useAuthorization';

export default function MainScreen() {
  const {colors} = useTheme();
  const {accounts, onChangeAccount, selectedAccount} = useAuthorization();

  return (
    <>
    <Appbar.Header elevated mode="center-aligned">
      <Appbar.Content title="Solana React Native dApp" />
    </Appbar.Header>
    <Portal.Host>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
        Use this as a starting point to build your own Solana mobile dApp!
        </Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>
            - Connect to a Solana wallet by clicking the ConnectWalletButton
          </Text>
          <Text style={styles.bullet}>
            - View your wallet's balance using the AccountInfo component
          </Text>
          <Text style={styles.bullet}>
            - Request an airdrop of SOL to your wallet with the FundAccount
          </Text>         
          <Text style={styles.bullet}>
            - Click the name of your wallet to view your account in Solana Explorer
          </Text>
        </View>
      </ScrollView>
      {accounts && selectedAccount ? (
        <AccountInfo
          accounts={accounts}
          onChange={onChangeAccount}
          selectedAccount={selectedAccount}
        />
      ) : (
        <ConnectWalletButton
          style={styles.connectButton}
          mode='contained'
          buttonColor={colors.primary}
          textColor={colors.onPrimary}
        >
          Connect to Wallet
        </ConnectWalletButton>
      )}
    </Portal.Host>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bulletContainer: {
    marginLeft: 32,
  },
  bullet: {
    fontSize: 18,
    marginBottom: 8,
  },
  connectButton: {
    margin: 16,
  },
});
