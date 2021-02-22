import {CallHandler, ExecutionContext, Injectable, NestInterceptor, Scope} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({scope: Scope.DEFAULT})
export class ResponseTransformerInterceptor implements NestInterceptor {

    private readonly CONTEXT = ResponseTransformerInterceptor.name;

    constructor(){}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const {statusCode} = context.switchToHttp().getResponse()


        return next.handle().pipe(
            map(responseData => {
                if (responseData) {
                    return {
                        success: true,
                        status: statusCode,
                        data: responseData
                    };
                } else {
                    return {
                        success: true,
                        status: 404,
                        message: 'Not found!'
                    };
                }
            })
        );
    }
}
