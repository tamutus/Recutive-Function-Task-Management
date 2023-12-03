import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutCollaboratorsInputSchema } from './TaskTemplateCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema } from './TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutCollaboratorsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema;
