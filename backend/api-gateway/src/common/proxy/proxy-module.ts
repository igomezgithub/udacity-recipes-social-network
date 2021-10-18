import { Module } from '@nestjs/common';
import { ClientProxyRecipesSocialNetwork } from './client-proxy';

@Module({
  providers: [ClientProxyRecipesSocialNetwork],
  exports: [ClientProxyRecipesSocialNetwork]
})
export class ProxyModule {}