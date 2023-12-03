import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutImplementationsInputSchema } from './ProjectTemplateCreateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema } from './ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema';
import { ProjectTemplateUpsertWithoutImplementationsInputSchema } from './ProjectTemplateUpsertWithoutImplementationsInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema';
import { ProjectTemplateUpdateWithoutImplementationsInputSchema } from './ProjectTemplateUpdateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema';

export const ProjectTemplateUpdateOneWithoutImplementationsNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneWithoutImplementationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutImplementationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneWithoutImplementationsNestedInputSchema;
