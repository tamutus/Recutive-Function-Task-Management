import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesUpdateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUpdateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema;
