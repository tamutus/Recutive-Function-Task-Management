import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutTagsInputSchema } from './TaskTemplateCreateWithoutTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutTagsInputSchema';

export const TaskTemplateCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutTagsInputSchema;
