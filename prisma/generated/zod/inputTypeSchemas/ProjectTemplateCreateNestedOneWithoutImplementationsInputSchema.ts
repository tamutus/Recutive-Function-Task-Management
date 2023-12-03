import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutImplementationsInputSchema } from './ProjectTemplateCreateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema } from './ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutImplementationsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema;
