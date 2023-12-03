import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesUpdateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUpdateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema';

export const PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema;
