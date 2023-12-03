import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutPrivateEnergiesInputSchema } from './PersonCreateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { PersonCreateOrConnectWithoutPrivateEnergiesInputSchema } from './PersonCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { PersonUpsertWithoutPrivateEnergiesInputSchema } from './PersonUpsertWithoutPrivateEnergiesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './PersonUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { PersonUpdateWithoutPrivateEnergiesInputSchema } from './PersonUpdateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const PersonUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
