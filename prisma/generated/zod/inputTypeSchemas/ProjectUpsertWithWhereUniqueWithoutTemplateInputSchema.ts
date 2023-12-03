import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateWithoutTemplateInputSchema } from './ProjectUpdateWithoutTemplateInputSchema';
import { ProjectUncheckedUpdateWithoutTemplateInputSchema } from './ProjectUncheckedUpdateWithoutTemplateInputSchema';
import { ProjectCreateWithoutTemplateInputSchema } from './ProjectCreateWithoutTemplateInputSchema';
import { ProjectUncheckedCreateWithoutTemplateInputSchema } from './ProjectUncheckedCreateWithoutTemplateInputSchema';

export const ProjectUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTemplateInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default ProjectUpsertWithWhereUniqueWithoutTemplateInputSchema;
