import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEnergiesInputSchema } from './PersonCreateWithoutEnergiesInputSchema';
import { PersonUncheckedCreateWithoutEnergiesInputSchema } from './PersonUncheckedCreateWithoutEnergiesInputSchema';
import { PersonCreateOrConnectWithoutEnergiesInputSchema } from './PersonCreateOrConnectWithoutEnergiesInputSchema';
import { PersonUpsertWithoutEnergiesInputSchema } from './PersonUpsertWithoutEnergiesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutEnergiesInputSchema } from './PersonUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { PersonUpdateWithoutEnergiesInputSchema } from './PersonUpdateWithoutEnergiesInputSchema';
import { PersonUncheckedUpdateWithoutEnergiesInputSchema } from './PersonUncheckedUpdateWithoutEnergiesInputSchema';

export const PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => PersonUpdateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema;
