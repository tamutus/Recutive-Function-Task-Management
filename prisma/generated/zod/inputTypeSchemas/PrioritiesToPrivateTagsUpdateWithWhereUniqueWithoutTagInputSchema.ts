import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsUpdateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUpdateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema';

export const PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema;
