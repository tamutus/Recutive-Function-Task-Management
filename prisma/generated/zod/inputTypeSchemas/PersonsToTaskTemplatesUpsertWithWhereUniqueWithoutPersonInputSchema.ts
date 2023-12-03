import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesUpdateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUpdateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema';

export const PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema;
