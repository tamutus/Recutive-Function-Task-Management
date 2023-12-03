import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsUpdateWithoutFollowerInputSchema } from './PersonsToTagsUpdateWithoutFollowerInputSchema';
import { PersonsToTagsUncheckedUpdateWithoutFollowerInputSchema } from './PersonsToTagsUncheckedUpdateWithoutFollowerInputSchema';
import { PersonsToTagsCreateWithoutFollowerInputSchema } from './PersonsToTagsCreateWithoutFollowerInputSchema';
import { PersonsToTagsUncheckedCreateWithoutFollowerInputSchema } from './PersonsToTagsUncheckedCreateWithoutFollowerInputSchema';

export const PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInput> = z.object({
  where: z.lazy(() => PersonsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToTagsUpdateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUncheckedUpdateWithoutFollowerInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutFollowerInputSchema) ]),
}).strict();

export default PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInputSchema;
