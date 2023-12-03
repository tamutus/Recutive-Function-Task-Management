import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateWithoutTagInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema';

export const ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema;
