import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutTagsInputSchema } from './TaskTemplateCreateWithoutTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutTagsInputSchema';
import { TaskTemplateCreateOrConnectWithoutTagsInputSchema } from './TaskTemplateCreateOrConnectWithoutTagsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutTagsInputSchema;
