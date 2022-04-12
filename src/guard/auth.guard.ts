import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  // 実装必須
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    context.switchToHttp().getRequest();
    //validate Request falseを返すとNestはリクエストを拒否する
    return true;
  }
}
