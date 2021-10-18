import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy-module';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [ProxyModule],
  controllers: [RecipeController]
})
export class RecipeModule {}
