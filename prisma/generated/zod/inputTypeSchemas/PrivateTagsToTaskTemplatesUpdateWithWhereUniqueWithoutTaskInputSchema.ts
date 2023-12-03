import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
