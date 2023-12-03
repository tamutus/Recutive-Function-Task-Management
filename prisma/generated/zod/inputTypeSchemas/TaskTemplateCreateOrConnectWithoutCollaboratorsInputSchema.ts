import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutCollaboratorsInputSchema } from './TaskTemplateCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema';

export const TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema;
