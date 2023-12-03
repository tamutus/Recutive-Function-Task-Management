import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutTemplateInputSchema } from './ProjectCreateWithoutTemplateInputSchema';
import { ProjectUncheckedCreateWithoutTemplateInputSchema } from './ProjectUncheckedCreateWithoutTemplateInputSchema';
import { ProjectCreateOrConnectWithoutTemplateInputSchema } from './ProjectCreateOrConnectWithoutTemplateInputSchema';
import { ProjectCreateManyTemplateInputEnvelopeSchema } from './ProjectCreateManyTemplateInputEnvelopeSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.ProjectCreateNestedManyWithoutTemplateInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTemplateInputSchema),z.lazy(() => ProjectCreateWithoutTemplateInputSchema).array(),z.lazy(() => ProjectUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => ProjectCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectWhereUniqueInputSchema),z.lazy(() => ProjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectCreateNestedManyWithoutTemplateInputSchema;
