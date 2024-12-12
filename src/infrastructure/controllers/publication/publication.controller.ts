import {Body, Controller, Get, Param, Post, Req} from "@nestjs/common";
import {PublicationModel} from "../../../domain/model/publication";
import {CreatePublicationCommand} from "../../../application/commands/publication/createPublication.command";

@Controller('/api/v1/publications')
export default class PublicationController {
    constructor() {
    }

    @Post('')
    async createPublication(@Req() req: any, @Body()body: CreatePublicationCommand): Promise<PublicationModel> {
        return new PublicationModel();
    }

    @Get('/:id')
    async getPublication(@Req() req: any, @Param('id') id: string): Promise<string> {
        console.log(req.sessionNavigationId);
        return 'Get publication';
    }

}
