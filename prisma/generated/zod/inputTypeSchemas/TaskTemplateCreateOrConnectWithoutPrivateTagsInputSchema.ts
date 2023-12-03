import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutPrivateTagsInputSchema } from './TaskTemplateCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema';

export const TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema;
