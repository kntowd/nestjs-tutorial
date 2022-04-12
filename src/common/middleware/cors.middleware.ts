import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function cors(req: Request, res: Response, next: NextFunction) {
  console.log('cors setting');
  next();
}
