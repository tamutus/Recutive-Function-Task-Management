import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutPrivateTagsInputSchema } from './TaskTemplateCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema } from './TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema;
