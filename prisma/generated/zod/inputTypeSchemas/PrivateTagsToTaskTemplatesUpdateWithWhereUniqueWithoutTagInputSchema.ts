import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema';

export const PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema;
