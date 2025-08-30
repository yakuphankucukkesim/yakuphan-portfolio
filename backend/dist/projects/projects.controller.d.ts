import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<import("./project.schema").Project>;
    findAll(): Promise<import("./project.schema").Project[]>;
    findFeatured(): Promise<import("./project.schema").Project[]>;
    findOne(id: string): Promise<import("./project.schema").Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<import("./project.schema").Project>;
    remove(id: string): Promise<import("./project.schema").Project>;
}
